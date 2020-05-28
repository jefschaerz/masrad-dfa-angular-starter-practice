# DiaLog API

## Base URL

When the backend runs, the API is exposed at:

```
http://localhost:4300
```

## Routes

### Retrieve all DiaLogs

To retrieve all the DiaLogs, make a `GET` request to `/dialogs`.

This will return an array of DiaLog objects.

### Retrieve all messages for a DiaLog

To retrieve the complete list of messages for a specific DiaLog, make a `GET` request to `/dialogs/[id]/messages` (with `[id]` being replaced by the DiaLog id).

This will return an array of Message objects.

## Models

### DiaLog

Here's the properties of a DiaLog object:

| name             | type                | description                        |
| :--------------- | :------------------ | :--------------------------------- |
| `id`             | number              | The id of the Dialog               |
| `contact`        | string              | The name of the contact            |
| `lastMessage`    | [Message](#message) | The last message in the discussion |
| `unreadMessages` | number              | The number of unread messages      |

### Message

Here's the properties of a Message object:

| name        | type    | description                                                                         |
| :---------- | :------ | :---------------------------------------------------------------------------------- |
| `id`        | number  | The id of the Message                                                               |
| `content`   | string  | The actual content of the message                                                   |
| `postedAt`  | Date    | The date at which the message has been sent                                         |
| `postedBy`  | string  | Indicates if the message has been sent by the user ('me') or their contact ('them') |
| `alignment` | string  | The alignment of the message. Can be either: 'left', 'center' or 'right'            |
| `read`      | boolean | Indicates wether the user has read this message                                     |
