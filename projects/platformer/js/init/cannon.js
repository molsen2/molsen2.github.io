(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createCannon(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        /*createCannon("top", 450);
        createCannon("left", 325);
        createCannon("left", 375);
        createCannon("left", 425);
        createCannon("left", 475);
        createCannon("left", 525);
        createCannon("left", 575);

        createCannon("right", 300);
        createCannon("right", 350);
        createCannon("right", 400);
        createCannon("right", 450);
        createCannon("right", 500);
        createCannon("right", 550);
        createCannon("right", 600);

        createCannon("top", 300);
        createCannon("top", 350);
        createCannon("top", 400);
        createCannon("top", 450);
        createCannon("top", 500);
        createCannon("top", 550);
        createCannon("top", 600);

        createCannon("bottom", 325);
        createCannon("bottom", 375);
        createCannon("bottom", 425);
        createCannon("bottom", 475);
        createCannon("bottom", 525);
        createCannon("bottom", 575);
        createCannon("bottom", 625);*/

        
       
       
       
       
        
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
