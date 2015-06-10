(function() {
	'use strict';

	/**
	 * Defining Hello React Component. This is syntactic sugar for
	 *   a JavaScript Object Constructor Function.
	 * @param Object Literal of Component properties
	 */
	DI.App.Hello = React.createClass({
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
		 * React life-cycle method used to return this component.
		 *  Utilizes the properties and state placed into it.
		 */
		render: function() {
			//Rendered HTML with the component state
			return (
				<h1>Hello {this.state.place}</h1>
			)
		}
	});

})();