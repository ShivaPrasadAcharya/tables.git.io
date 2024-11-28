const tableData = [
  {
      id: "T001",
      subject: "History",
      title: "Important Dates in Indian Independence Movement",
      caption: "Timeline of Major Events",
      table: [
          ["Year", "Event", "Significance"],
          ["1857", "First War of Independence", "First organized rebellion against British rule"],
          ["1885", "Formation of Indian National Congress", "Beginning of organized nationalist movement"],
          ["1905", "Partition of Bengal", "Triggered Swadeshi Movement"],
          ["1915", "Gandhi's Return to India", "Beginning of new phase in freedom struggle"],
          ["1947", "Indian Independence", "End of British colonial rule"]
      ],
      footnote: "This timeline covers only major events.<br> Many other significant events and movements also contributed to India's independence.",
      compiler: "John Doe",
      dateCreated: "2024-01-15"
  }
  // Add more table objects here
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tableData;
}