var Counter = React.createClass({
    getDefaultProps: function(){
    	console.log('default  Props - plus')
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function() {
    	console.log('Component  Will Mount - plus')
    },

    render: function() {
        return (
          React.createElement('div', {},
            React.createElement('h1', {}, 'Licznik'),
            React.createElement('button', {onClick: this.increment}, 'Dodaj'),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
            React.createElement('span', {}, ' ' +this.state.counter)
          )
        )
    },

    componentDidMount: function(){
    	console.log('Component Did Mount -  plus')
    }

});

var element = React.createElement('div', {},
		React.createElement(Counter),
    React.createElement(Counter),
	);
ReactDOM.render(element, document.getElementById('app'));
