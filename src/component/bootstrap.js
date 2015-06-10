(function() {
    'use strict';

    /**
     *  Bootstrap Hello React component
     *  @param React element to be created
     *  @param Web Application element holding React tree of elements
     */
    React.render(
        React.createElement(DI.App.Hello, null),
        document.getElementById('app')
    );

})();
