const RecordCollection = (props) => (
  <ul>
    <h2>My Record Collection</h2>
    {props.records.map((item, index) =>
    <Record key={index} item={item}/>
    )}
  </ul>
);


class Record extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listenedTo: false,
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }


  onListItemClick() {
    this.setState({
      listenedTo: !this.state.listenedTo,
    });
  }


  render () {
    var style = {
      textDecoration: this.state.listenedTo ? 'line-through' : 'none',
    };
    return (
      <li style={style} onClick={this.onListItemClick}>{this.props.item}</li>
    )
  }
};


ReactDOM.render(
  <RecordCollection
    records={['Johnny Cash', 'Dave Brubeck', 'The Band']}
  />, document.getElementById('app'));

