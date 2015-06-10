(function() {
	'use strict';

	/**
	 * Defining Hello React Component. This is syntactic sugar for
	 *   a JavaScript Object Constructor Function.
	 * @param Object Literal of Component properties
	 */
	DI.App.Hello = React.createClass({displayName: "Hello",
		/**
		 *  React component lifecycle callback.
		 *    - Executes exactly once during the lifecycle of the
		 *      compoenet and sets the initial state of the component
		 *    - Executes before the component has been drawn on screen
		 **/
		getInitialState: function() {
			//Initially default this data to empty
			return {
				place: 'World'
			};
		},
		/**
		 * React life-cycle method used to return this component.
		 *  Utilizes the properties and state placed into it.
		 */
		render: function() {
			//Rendered HTML
			return (
				React.createElement("h1", null, "Hello ", this.state.place)
			)
		}
	});

})();