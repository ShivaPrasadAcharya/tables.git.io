const FilterManager = {
    initialize() {
        const subjectFilter = document.getElementById('subjectFilter');
        const titleFilter = document.getElementById('titleFilter');
        const captionFilter = document.getElementById('captionFilter');

        [subjectFilter, titleFilter, captionFilter].forEach(filter => {
            filter.addEventListener('change', () => this.applyFilters());
        });

        this.updateFilterOptions();
    },

    updateFilterOptions() {
        const tables = Array.from(document.querySelectorAll('.table-section'));
        
        // Get unique values
        const subjects = new Set(tables.map(table => 
            table.querySelector('.table-subtitle').textContent));
        const titles = new Set(tables.map(table => 
            table.querySelector('.table-title').textContent));
        const captions = new Set(tables.map(table => 
            table.querySelector('.table-caption').textContent));

        // Update subject filter
        this.populateFilter('subjectFilter', subjects);
        this.populateFilter('titleFilter', titles);
        this.populateFilter('captionFilter', captions);
    },

    populateFilter(filterId, values) {
        const filter = document.getElementById(filterId);
        const currentValue = filter.value;
        
        // Clear existing options except 'All'
        filter.innerHTML = '<option value="all">All</option>';
        
        // Add new options
        Array.from(values).sort().forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            filter.appendChild(option);
        });

        // Restore previous selection if it still exists
        if (Array.from(filter.options).some(opt => opt.value === currentValue)) {
            filter.value = currentValue;
        }
    },

    applyFilters() {
        const subject = document.getElementById('subjectFilter').value;
        const title = document.getElementById('titleFilter').value;
        const caption = document.getElementById('captionFilter').value;

        document.querySelectorAll('.table-section').forEach(section => {
            const matchesSubject = subject === 'all' || 
                section.querySelector('.table-subtitle').textContent === subject;
            const matchesTitle = title === 'all' || 
                section.querySelector('.table-title').textContent === title;
            const matchesCaption = caption === 'all' || 
                section.querySelector('.table-caption').textContent === caption;

            section.style.display = 
                matchesSubject && matchesTitle && matchesCaption ? 'block' : 'none';
        });
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FilterManager;
}