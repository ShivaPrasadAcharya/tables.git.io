const FormManager = {
    initialize() {
        const form = document.getElementById('tableDataForm');
        const addNewBtn = document.getElementById('addNewTable');
        const cancelBtn = document.getElementById('cancelBtn');
        const previewBtn = document.getElementById('previewBtn');
        const generateBtn = document.getElementById('generateBtn');
        const copyCodeBtn = document.getElementById('copyCode');

        addNewBtn.addEventListener('click', () => this.showForm());
        form.addEventListener('submit', (e) => this.handleSubmit(e));
        cancelBtn.addEventListener('click', () => this.hideForm());
        previewBtn.addEventListener('click', () => this.showPreview());
        generateBtn.addEventListener('click', () => this.generateCode());
        copyCodeBtn.addEventListener('click', () => {
            const code = document.getElementById('generatedCode').textContent;
            Utils.copyToClipboard(code);
        });
    },

    showForm() {
        document.getElementById('tableForm').style.display = 'block';
        document.getElementById('editingId').value = '';
        document.getElementById('tableDataForm').reset();
    },

    hideForm() {
        document.getElementById('tableForm').style.display = 'none';
        document.getElementById('tableDataForm').reset();
    },

    editTable(tableData) {
        document.getElementById('tableForm').style.display = 'block';
        document.getElementById('editingId').value = tableData.id;
        document.getElementById('tableId').value = tableData.id;
        document.getElementById('subject').value = tableData.subject;
        document.getElementById('title').value = tableData.title;
        document.getElementById('caption').value = tableData.caption;
        document.getElementById('tableContent').value = 
            tableData.table.map(row => row.join('|')).join('\n');
        document.getElementById('footnote').value = tableData.footnote;
        document.getElementById('compiler').value = tableData.compiler;
    },

    handleSubmit(e) {
        e.preventDefault();
        const formData = this.getFormData();
        const editingId = document.getElementById('editingId').value;

        if (editingId) {
            const section = document.getElementById(`section-${editingId}`);
            if (section) {
                section.replaceWith(TableManager.renderTable(formData));
            }
        } else {
            document.getElementById('tablesContainer').appendChild(
                TableManager.renderTable(formData)
            );
        }

        FilterManager.updateFilterOptions();
        this.hideForm();
    },

    getFormData() {
        return {
            id: document.getElementById('tableId').value,
            subject: document.getElementById('subject').value,
            title: document.getElementById('title').value,
            caption: document.getElementById('caption').value,
            table: Utils.parseTableInput(document.getElementById('tableContent').value),
            footnote: document.getElementById('footnote').value,
            compiler: document.getElementById('compiler').value,
            dateCreated: new Date().toISOString().split('T')[0]
        };
    },

    showPreview() {
        const formData = this.getFormData();
        const previewContent = document.getElementById('previewContent');
        previewContent.innerHTML = TableManager.renderTable(formData).innerHTML;
        new bootstrap.Modal(document.getElementById('previewModal')).show();
    },

    generateCode() {
        const formData = this.getFormData();
        const generatedCode = Utils.generateTableCode(formData);
        document.getElementById('generatedCode').textContent = generatedCode;
        new bootstrap.Modal(document.getElementById('codeModal')).show();
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormManager;
}