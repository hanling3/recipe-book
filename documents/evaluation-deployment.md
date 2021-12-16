# Usability Testing and Results

# Overview

- Project Name: Recipebook (recipe finder app)
- Team Name: McGraw Studio 
- Team Members: Ada Chai, Xuanhui Chen, Hedy Yang, Xinlu Zhou
- Project Focus:
    - Budget-friendly. Take advantage of filters and enable users to plan meals according to an inputted budget amount. 
    - Time-conscious. Rethink meal planning and allow users to customize their meals of the day by filtering recipes based on expected time. 
    - Performance. Make it easy for users to navigate and find recipes that remind them of home. 
- Outline of the content
    - Evaluation
    - Revision
    - Deploy App

# Evaluation

To evaluate the usability of our app, our team conducted 5 user tests. We summarized our main findings below. 

For a copy of our user testing protocol, raw interview notes, and debrief notes, please see the "User Testing (App)" section under "Additional Items" in the table of contents.

## Findings and Insights
1. Problem 1: 5/5 users had a hard time finding the "upload recipe" button. While we were conducting user testing, almost all of our participants mentioned they would like to see this button in an evident place that can attract their attention. 

2. Problem 2: No clear feedbacks on actions. 5/5 users mentioned that they were not sure if the recipe was added to the meal plan/favorite list successfully. Occasionally we observed that users would switch to certain pages to confirm recipes were successfully added. 

3. Problem 3: Users prefer to browse the recipes first and add it to meal plan. We found that our users meal planned one week ahead max.

4. Problem 4: Badges with the same icon confused users. One user said that they didn't understand why all the badges looked the same.

# Revision

Below, we have included our revised final sketches. We also included the original sketches for comparison to show what revisions we made.

## Original Sketches (for Comparison)
![Original Final Sketches](images/sketches/final_sketch.jpeg)

## Revised Final Sketches
![Final Sketches](images/sketches/revised_final_sketch.jpeg)

## Revised Final Sketches Justification

In order to address the issues uncovered above, we revised our final sketches as such:

1. First, we added text to the current icon button to help users better understand the action by reducing their cognitive workload. Then, we will change the location of the button to the center of the page to get user's attention more efficiently. 

2. To address the lack of feedback, we plan to provide confirmation messages in the form of pop-up windows to inform users that actions have been executed successfully. The popup will include the message, "You've successfully added a recipe." 

3. We will change the user flow of adding recipes to the meal plan by making the user add recipes to the meal plan using only the specific recipe details page and then schedule the recipe with a specific day of the week on the meal plan page. This is to account for users that only plan 1 week ahead max.

4. We will replace the star icon on badges with other icons that are more related to different implications of badges, which we believe will better communicate with users about what each badges represents. As for the cooking report on the profile page, while the appearance is the same in the sketches, we plan to include more relevant metrics, such as perhaps total cost of the recipe vs expected cost of the recipe.

Additionally, we revised the navigation bar so that there are now four main functions: a browse page, meal plan page, favorite page, and profile page. This is to make it more evident to the user how they can explore the recipes on the app.

Also, please note that on the profile page, the "Edit" button for changing one's profile name (represented by a pencil icon) is not interactive at this time. We opted to make it non-interactive so that we could focus on other features of our application.
Another thing to notice is that the recipes are designed to be arranged and listed by weekdays and meals once they are added to the meal plan page. According to our scenarios, we will only show one meal plan so that it is clear to see any changes made by users. Recipes will only be considered in the meal plans if they are added to meal plan page in the recipe cards because we want to hide any irrelevant information that the users do not need.

# Deploy App

Our PWA can be found here: https://ms-recipebook.herokuapp.com/

We were able to use Chrome's Lighthouse Audit to verify that our PWA meets progressive web app requirements.