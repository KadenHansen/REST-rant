# Rest-Rant
Rest-Rant is a mock social media app, where users can add restaurants that they have tried and give them a rave (if they liked it) or a rant (if they did not like it). 

## Routes Wireframe
| Method | Path | Purpose |
| --- | --- | --- |
| GET | / | Home Page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) |
| DELETE | /places/:id/rant/:rantid | Delete a rant (comment) |
| GET | * | 404 Page |

## Data
| Data | Typeof |
| --- | --- |
| name | string |
| city | string |
| state | string |
| cuisines | string |
| image | string |
