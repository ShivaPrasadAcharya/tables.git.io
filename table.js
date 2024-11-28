const TableManager = {
    renderTable(tableData) {
        const section = document.createElement('div');
        section.className = 'table-section';
        section.id = `section-${tableData.id}`;

        section.innerHTML = `
            ${Utils.formatTableSection(tableData)}
            <div class="table-info">
                <div class="table-title">${tableData.title}</div>
                <div class="table-subtitle">${tableData.subject}</div>
                <div class="table-caption">${tableData.caption}</div>
            </div>
            <div class="table-responsive ${tableData.table.length > 5 ? 'read-more-content' : ''}">
                ${Utils.generateTableHTML(tableData.table)}
            </div>
            ${tableData.footnote ? `<div class="footnote"><em>${tableData.footnote}</em></div>` : ''}
            ${tableData.table.length > 5 ? `
                <button class="btn btn-sm btn-link read-more-btn">Read More</button>
            ` : ''}
        `;

        this.attachTableEventListeners(section, tableData);
        return section;
    },

        attachTableEventListeners(section, tableData) {
            const readMoreBtn = section.querySelector('.read-more-btn');
            if (readMoreBtn) {
                const content = section.querySelector('.read-more-content');
                let isExpanded = false;
                readMoreBtn.addEventListener('click', () => {
                    isExpanded = !isExpanded;
                    content.style.maxHeight = isExpanded ? 'none' : '300px';
                    readMoreBtn.textContent = isExpanded ? 'Read Less' : 'Read More';
                });
                // Set initial height
                content.style.maxHeight = '300px';
            }
    
            // Edit button
            section.querySelector('.edit-btn').addEventListener('click', () => {
                FormManager.editTable(tableData);
                document.getElementById('tableForm').scrollIntoView({ behavior: 'smooth' });
            });
    
            // Pin button
            section.querySelector('.pin-btn').addEventListener('click', () => {
                const container = document.getElementById('tablesContainer');
                container.insertBefore(section, container.firstChild);
            });
    
            // Print button
            section.querySelector('.print-btn').addEventListener('click', () => {
                const printWindow = window.open('', '_blank');
                printWindow.document.write(`
                    <html>
                        <head>
                            <title>Print Table</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                            <link href="styles.css" rel="stylesheet">
                            <style>
                                @page { size: auto; margin: 20mm; }
                                body { padding: 20px; }
                                .read-more-content { max-height: none !important; }
                            </style>
                        </head>
                        <body>
                            ${section.innerHTML}
                        </body>
                    </html>
                `);
                printWindow.document.close();
                printWindow.print();
            });
    
            // Delete button
            section.querySelector('.delete-btn').addEventListener('click', () => {
                if (confirm('Are you sure you want to delete this table?')) {
                    section.remove();
                    // Update filters after deletion
                    FilterManager.updateFilterOptions();
                }
            });
        }
    };
    
    // Export for module usage
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = TableManager;
    }