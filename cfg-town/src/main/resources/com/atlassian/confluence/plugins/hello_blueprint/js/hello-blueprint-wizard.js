/**
 * The JavaScript in this file determines how the Wizard for the Hello Blueprint blueprint will run.
 *
 * It is a belaboured example for illustrative purposes only, showing the different hooks that the Wizard API exposes:
 *  - pre-render
 *  - post-render
 *  - submit
 *
 * The example functions below show usage of the data that gets passed to these hooks
 */
AJS.toInit(function($) {

    

    
    /**
     * This submit callback is called when the user presses the "Next" button on a Wizard page ("Create" for the last
     * page). It can run validation and add extra data.
     *
     * @param e the jQuery event that triggers the submit, not normally used but includes the Wizard pageId in the
     *          event's namespace in case it is required.
     * @param state Object containing:
     *        - $container - the jQuery object wrapping the rendered Soy template for this page
     *        - wizardData - contains all data gathered by the Wizard pages
     *        - pageData - pre-filled with the values from the form on this page, and can have further data added to it
     *        - nextPageId - not filled when the function is called, this value can be set to change which Wizard page
     *                       should be shown next. If blank, the next page defined in the atlassian-plugin.xml will be
     *                       shown.
     *        - finalUrl - not filled when the function is called, if set on the *last* page of the Wizard, this value
     *                     is where the Wizard will go on completion. If unset, the Wizard will take the user to the
     *                     Editor page or View page based on the "create-result" specified in your blueprint config.
     *
     * @return boolean - true if validation passes, false if the submit should be aborted
     */
    

    
    /**
     * This post-render callback is called after the Soy template for the Wizard page is rendered. It is useful for
     * adding further JS behaviour to the Wizard page.
     *
     * @param e the jQuery event that triggers the post-render, not normally used but includes the Wizard pageId in the
     *          event's namespace in case it is required.
     * @param state Object containing:
     *        - $container - the jQuery object wrapping the rendered Soy template for this page
     *        - wizardData - contains all data gathered by the Wizard pages
     */
    
    /**
     * This pre-render callback is called before the Soy template for the Wizard page is rendered. It is useful for
     * adding data to the Soy render context.
     *
     * @param e the jQuery event that triggers the pre-render, not normally used but includes the Wizard pageId in the
     *          event's namespace in case it is required.
     * @param state Object containing:
     *        - soyRenderContext - the context Object for adding values to, for use in the Soy render
     *        - wizardData - contains all data gathered by the Wizard pages, may be used to add data to the Soy context
     */
    

    // Register wizard hooks
    Confluence.Blueprint.setWizard('com.atlassian.confluence.plugins.town-blueprint:hello-space-blueprint-item', function(wizard) {
        wizard.on("pre-render.spaceBasicDetailsId", Confluence.SpaceBlueprint.CommonWizardBindings.preRender);
        wizard.on("post-render.spaceBasicDetailsId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
        wizard.on("submit.spaceBasicDetailsId", Confluence.SpaceBlueprint.CommonWizardBindings.submit);
    });

    

});
