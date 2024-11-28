const Utils = {
    formatDate(date) {
        return new Date(date).toLocaleDateString();
    },

    generateTableHTML(tableData) {
        return `
            <table class="table table-bordered">
                ${tableData.map((row, index) => `
                    <tr>
                        ${row.map(cell => 
                            index === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`
                        ).join('')}
                    </tr>
                `).join('')}
            </table>
        `;
    },

    parseTableInput(input) {
        return input.trim().split('\n').map(row => row.split('|').map(cell => cell.trim()));
    },

    generateTableCode(tableData) {
        // Compact table array formatting
        const formattedTable = tableData.table
            .map(row => `[${row.map(cell => `"${cell}"`).join(', ')}]`)
            .join(',\n        ');

        return `{
    id: "${tableData.id}",
    subject: "${tableData.subject}",
    title: "${tableData.title}",
    caption: "${tableData.caption}",
    table: [
        ${formattedTable}
    ],
    footnote: "${tableData.footnote}",
    compiler: "${tableData.compiler}",
    dateCreated: "${new Date().toISOString().split('T')[0]}"
}`;
    },

    copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => alert('Code copied to clipboard!'))
            .catch(err => console.error('Failed to copy text:', err));
    },

    formatTableSection(data) {
        return `
            <div class="table-header">
                <div>Table ${data.id} - ${Utils.formatDate(data.dateCreated)}</div>
                <div class="table-actions">
                    <button class="btn btn-sm btn-outline-primary edit-btn" data-id="${data.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-warning pin-btn" data-id="${data.id}">
                        <i class="fas fa-thumbtack"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-info print-btn" data-id="${data.id}">
                        <i class="fas fa-print"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${data.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}