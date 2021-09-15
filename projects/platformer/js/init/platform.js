(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        //createPlatform(400, 250);
        //createPlatform(170, 460, 0.5);
        
        
        /*createPlatform(300, 200, 4);
        createPlatform(0, 200);
        createPlatform(0, 250);
        createPlatform(300, 250, 4);
        createPlatform(0, 300);
        createPlatform(300, 300, 4);
        
        createPlatform(0, 350);
        createPlatform(300, 350, 4);
        createPlatform(0, 400);
        createPlatform(300, 400, 4);

        createPlatform(0, 450);
        createPlatform(300, 450, 4);
        createPlatform(0, 500);
        createPlatform(300, 500, 4);

        createPlatform(0, 550);
        createPlatform(300, 550, 4);
        createPlatform(0, 600);
        createPlatform(300, 600, 4);*/

   
        createPlatform(100, 40, .5, .3);//top of box//
        createPlatform(100, 40, .1, 3);//left of box//
        createPlatform(260, 40, .1, 3);//right of box//
        createPlatform(100, 125, .5, .3);//bottom of box//

        createPlatform(300, 570, .45);
        createPlatform(400, 200, .1, 3);
        createPlatform(625, 400, .1, 3);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);