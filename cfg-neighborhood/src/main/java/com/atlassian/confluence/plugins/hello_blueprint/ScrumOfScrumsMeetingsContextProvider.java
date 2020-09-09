package com.atlassian.confluence.plugins.hello_blueprint;

import com.atlassian.confluence.plugins.createcontent.api.contextproviders.AbstractBlueprintContextProvider;
import com.atlassian.confluence.plugins.createcontent.api.contextproviders.BlueprintContext;
import static com.atlassian.confluence.plugins.createcontent.actions.DefaultBlueprintContentGenerator.CONTENT_PAGE_TITLE_CONTEXT_KEY;


/**
 * Provides content for the "Hierarchy" Child A Blueprint.
 *
 * @since 1.6
 */
public class ScrumOfScrumsMeetingsContextProvider extends AbstractBlueprintContextProvider
{
    @Override
    protected BlueprintContext updateBlueprintContext(BlueprintContext context)
    {
        context.put("foo", "bar");
		//blueprintContext.put("ParentPageTitle", "");
		context.put("ParentPageTitle", "");
        //context.put(CONTENT_PAGE_TITLE_CONTEXT_KEY, "Erza Scarlet");
		context.setTitle("Scrum of Scrums & Meta Scrum Meeting");
        return context;
       
    }
}