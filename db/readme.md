#DB Guide

## Interfaces

### 1. Events

dbObject: events

> id : **Number**
> name : **String**
> location: **String** _([Address] | "Online-Event")_
> hostEventOwner. : **Number** _(User->id)_
> type: **Number** _(PUBLIC = 1, PRIVATE = 0)_
> date: **Date**
> tags: **String** _(separator = ,)_
> description: **String**

### 2. Users

dbObject: users

> id: **Number**
> firstName : **String**
> lastName: **String**
> avatar: **String** _(url)_
> birthday: **Date**

### 3. FavoritesEvents

dbObject: favoritesEvents
id: **Number**
userId: **Number** _(User->id)_
eventId: **Number** _(Event->id)_
