document.addEventListener('DOMContentLoaded', () => {
    // Render initial tables
    tableData.forEach(data => {
        document.getElementById('tablesContainer').appendChild(
            TableManager.renderTable(data)
        );
    });

    // Initialize managers
    SearchManager.initialize();
    FilterManager.initialize();
    FormManager.initialize();
});