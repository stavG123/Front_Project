class MyBookDisplay extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with bookIndex, books array
    this.state = {
      bookIndex: 0, // Index of the selected book
      books: [], // Array of books
      isLoading: true,
    };
  }
  // Function to handle change in book selection
  handleChange = (e) => {
    this.setState({ bookIndex: event.target.value });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    // Fetch data
    fetch("jason/html3.json")
      .then((response) => response.json())
      .then((data) => {
        // Update state with fetched set isLoading to false
        this.setState({ books: data, isLoading: false, bookIndex: 0 });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        this.setState({ isLoading: false });
      });
  }
  // Function to handle clearing book selection
  handleClear = () => {
    // Reset bookIndex to 0 (Michael Phelps)
    this.setState({ bookIndex: 0 });
  };

  render() {
    if (this.state.isLoading) {
      return <p>Loading ....</p>;
    } else {
        // Display book information once data is loaded
      return (
        <>
        
          <h4>Video and info about the Coach</h4>
          <select value={this.state.bookIndex} onChange={this.handleChange}>
            {this.state.books.map((book, i) => (
              <option key={"book" + i} value={i}>
                {book.Name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <img
            src={"Photos/" + this.state.books[this.state.bookIndex].image}
            height="200"
            width="200"
          />
          <br />
          <span>Name: </span>
          {this.state.books[this.state.bookIndex].Name}.
          <br />
          <span>Video Description: </span>
          {this.state.books[this.state.bookIndex].Video_Description}.
          <br />
          <span>Video Long: </span>
          {this.state.books[this.state.bookIndex].Video_Long}.
          <br />
          <br />
          <iframe
            width="420"
            height="345"
            src={`https://www.youtube.com/embed/${
              this.state.books[this.state.bookIndex].youtubecode
            }`}
          ></iframe>
          <br />
          <br />
          <button onClick={this.handleClear}>Clear Selection</button>{" "}
          {/* Clear button */}
        </>
      );
    }
  }
}

const divBookDisplay = ReactDOM.createRoot(
  document.querySelector("#divBookDisplay")
);
divBookDisplay.render(<MyBookDisplay />);
