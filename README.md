## GINA'S DAYCARE


#### DESCRIPTION OF APP:
something something daycare waiting list


### -----MVP-----


#### PARENT

- User can search for ECCs by location
- User can register and log in
- User can save information about their child/children
- User can add child to a waitlist
- User can see what waitlists their child/children are on and what position they are in the cue

#### ECC

- User can register their business and log in
- User can edit the description of their business that will show up in the parent ECC search
- User can see who has applied to be on the waitlist and can add them to it/delete their request
- User can see their business waitlist, edit the order cue, and delete applicants
- User can update their business waitlist and have this change affect parents personal waitlists



#### WIREFRAMES:

pictures of drawings of websites





### FRONT END:


#### LIST OF COMPONENTS:

#### LIST OF REDUCERS:

#### LIST OF ACTIONS:




### BACK END:


#### LIST OF DATA TABLES:


#### PARENT
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | integer.increment | unique identifier for parent user |
  | first_name | string | to refer to parent user |
  | last_name | string | to help identify family connections |
  | username | string.unique | for user log in |
  | hash_password | string | |
  | email | string.unique | allow user to be contacted |
  
  
#### CHILD
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | integer.increment | unique identifier for child |
  | first_name | string | to refer to child in waitlist |
  | last_name | string | to help identify family connections |
  | date_of_birth | string | to identify when a child qualifies for care/leaving to start school |
  | parent_id | integer | join child to their parent |
  
  
#### ECC
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | integer.increment | unique identifier for ecc user |
  | center_name | string | for search/display |
  | ph_number | string.unique | for parent to contact |
  | email | string.unique | for parent to contact |
  | address | string | for search/display |
  | suburb | string | for search by location |
  | description | string | describe what they need |
  | photo | string | for display of location space to parent |
  
  
#### WAITLIST
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | child_id | integer | to join from child table |
  | ecc_id | integer | to join from ECC table |
  | rank_ecc | integer | assign a rank value to children in waitlists |
  | rank_parent | integer | assign a rank value of parents preferred ECC's |



### LIST OF SERVER SIDE FUNCTIONS:
  


#### API:


#### DB:


#### ROUTES:
