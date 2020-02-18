# Garage Sales 
Web  application will provide the  visbility 
of the garage sales events in the neighbourhood.
Web application will store , display the garage sale items.

# Tools and Technologies
- Mongodb

## Collections

- USER
  - USERID PK
  - First_name
  - last_name
  - email_address

- Event 
    - user_id  FK
    - event_id Pk
    - Event_name
    - event_date
    - start_time
    - end_time
    - status  (open ,closed)

- Event_items
    
    - Item_ID PK
    - event_ID FK
    - item_desc
    - quantity
    - unit_price 

## Front page should show all the following

- user_profile
    - First_name
    - last_name
    - Email_address
    
- Event_registration
- Item_details
- 


## Schedule

 - Monday - Approval
 - Tuesday - Backend , Collections
 