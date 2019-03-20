var CounterPlus = React.createClass({
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

    componentWillMount: function() {
    	console.log('Component  Will Mount - plus')
    },

    render: function() {
        return React.createElement('button', {onClick: this.increment},
            React.createElement('span', {}, 'Dodaj ' + this.state.counter)
        );
    },

    componentDidMount: function(){
    	console.log('Component Did Mount -  plus')
    }

});

var CounterMinus = React.createClass({
    getDefaultProps: function(){
    	console.log('default  Props - minus')
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
    	this.setState({
    		counter: this.state.counter -1
    	});
    },

    componentWillMount: function() {
    	console.log('Component  Will Mount - minus')
    },

    render: function() {
        return React.createElement('button', {onClick: this.decrement},
            React.createElement('span', {}, 'Odejmij ' + this.state.counter)
        );
    },

    componentDidMount: function(){
    	console.log('Component Did Mount -  minus')
    }
});


var element = React.createElement('div', {}, 
		React.createElement(CounterMinus),
		React.createElement(CounterPlus),
	);
ReactDOM.render(element, document.getElementById('app'));