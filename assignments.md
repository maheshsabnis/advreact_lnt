# Day 1
1. Create a DataGridComponent, that will do the following
    - Generate Columns and Rows based in JSON array passed to it
    - Accept 'CanDelete' property from parent, if this is true then each row of teh Datagrid will show 'Delete' button, when this button is pressed, then the data of the row must be deleted from Parent
    - Accept 'CanSortReverse', property from parent, if this is true theneach columnheader will show sort and reverse buttons (u can use bootstrap) to sort and reverse data from the DataGrid based on the column row data   


 # Day 3

Duration: 120 Mins

 For the following two problem statements, you must create Action and Reducer

 1. Modify the ListCategoriesComponent based on the following requirements
    - When the row is clicked, then the selected category details must be shown in AddCategoryComponent
    - The End-User can edit this data and click on 'Save' button, the updated record values must be shown back in the ListCategoryComponent
2. Create a SearchComponent with the text-element in it, end-user can enter category's base price in it and then the ListCategoriesComponent must show all categories having BasePrice less than the value of BasePrice entered in the Text-Element 
    - Action
    - Reducer`


# Day 4: 
1. Modify action constants from sagapp/constants/index.js for defining constants for reading category by categiryid, updating, and deleting category
2. Modify action creators from  sagaapp/actions/index.js by adding action creators for reading single category by category id, updating, and deleting category
3. Modify reducers from sagaapp/reducers/index.js by adding reducer cased for new action creators those are added
4. Modify saga middlewares for update and delete geberator actions
5. Modify the AddCategoryComponent that will load the category to be updated based on the table row selected from the ListCategoryComponent table. Dispatch an naction for modifying the category and then showing the modifed record in the ListCategoryComponent Table
6. Add Delete button for each table row for ListCategoryComponent table to dispatch an action for deleting the category   
