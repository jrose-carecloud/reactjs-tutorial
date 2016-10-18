var React = require('react');
var ReactDOM = require('react-dom');

var RelationshipContainer = React.createClass({
  render: function(){
      var relationshipLists = this.props.relationshipLists;
      var relationContainer = relationshipLists.map(function(list){
        return <FriendsContainer list={list.list} name="Tyler McGinnis" type={list.type}/>;
      });
      return (<div>{relationContainer}</div>)
    }
});

var FriendsContainer = React.createClass({
  render: function(){
    return (
      <div>
        <h3> Name: {this.props.name} </h3>
        <ShowList names={this.props.list} title={this.props.type}/>
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(person){
      return <li> {person} </li>;
    });
    var title = this.props.title;
    return (
      <div>
        <h3> {title} </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

var friendsList = {
  list: ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'],
  type: 'Friends'
}

var acquaintancesList = {
  list: ['Peter Piper', 'Taylor Slow', 'George Carlin'],
  type: 'Acquaintances',
}

var relationshipLists = [friendsList, acquaintancesList];

ReactDOM.render(
    <RelationshipContainer relationshipLists ={relationshipLists} />,
    document.getElementById("relationshipContainer")
  );
