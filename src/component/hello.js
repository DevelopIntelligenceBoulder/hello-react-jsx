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
		 *      component and sets the initial state of the component
		 *    - Executes before the component has been drawn on screen
		 **/
		getInitialState: function() {
			//Return an object literal containing component state
			return {
				place: 'World'
			};
		},
		/**
		 * React internal method used to render this component.
		 *  Utilizes the properties and state placed into it.
		 *  Only method needed to create a React component.
		 */
		render: function() {
			//Rendered HTML with the component state
			return (
				React.createElement("h1", null, "Hello ", this.state.place)
			)
		}
	});

})();