const SearchManager = {
    currentMatchIndex: -1,
    matches: [],

    initialize() {
        const searchInput = document.getElementById('searchInput');
        const prevBtn = document.getElementById('prevMatch');
        const nextBtn = document.getElementById('nextMatch');

        searchInput.addEventListener('input', () => this.performSearch());
        prevBtn.addEventListener('click', () => this.navigateMatch(-1));
        nextBtn.addEventListener('click', () => this.navigateMatch(1));
    },

    performSearch() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        this.clearHighlights();
        
        if (!searchTerm) {
            this.updateMatchCount(0, 0);
            return;
        }

        const container = document.getElementById('tablesContainer');
        const textNodes = this.getTextNodes(container);
        this.matches = [];

        textNodes.forEach(node => {
            const text = node.textContent.toLowerCase();
            let index = text.indexOf(searchTerm);
            
            while (index >= 0) {
                const range = document.createRange();
                range.setStart(node, index);
                range.setEnd(node, index + searchTerm.length);
                
                const highlight = document.createElement('span');
                highlight.className = 'highlight';
                range.surroundContents(highlight);
                
                this.matches.push(highlight);
                
                node = highlight.nextSibling;
                if (!node) break;
                
                text = node.textContent.toLowerCase();
                index = text.indexOf(searchTerm);
            }
        });

        this.currentMatchIndex = this.matches.length > 0 ? 0 : -1;
        this.updateMatchCount(this.currentMatchIndex + 1, this.matches.length);
        if (this.matches.length > 0) {
            this.highlightCurrentMatch();
        }
    },

    getTextNodes(node) {
        const textNodes = [];
        const walk = document.createTreeWalker(
            node,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    return node.parentNode.nodeName !== 'SCRIPT' &&
                           node.parentNode.nodeName !== 'STYLE'
                        ? NodeFilter.FILTER_ACCEPT
                        : NodeFilter.FILTER_REJECT;
                }
            }
        );

        let currentNode;
        while (currentNode = walk.nextNode()) {
            textNodes.push(currentNode);
        }
        return textNodes;
    },

    clearHighlights() {
        document.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });
        this.matches = [];
        this.currentMatchIndex = -1;
    },

    navigateMatch(direction) {
        if (this.matches.length === 0) return;

        this.matches[this.currentMatchIndex].classList.remove('active');
        this.currentMatchIndex = (this.currentMatchIndex + direction + this.matches.length) % this.matches.length;
        this.highlightCurrentMatch();
    },

    highlightCurrentMatch() {
        const currentMatch = this.matches[this.currentMatchIndex];
        currentMatch.classList.add('active');
        currentMatch.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        this.updateMatchCount(this.currentMatchIndex + 1, this.matches.length);
    },

    updateMatchCount(current, total) {
        document.getElementById('matchCount').textContent = total === 0 
            ? '0/0' 
            : `${current}/${total}`;
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SearchManager;
}