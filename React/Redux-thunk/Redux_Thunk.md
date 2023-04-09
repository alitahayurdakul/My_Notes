# Redux Thunk

- Define async action creators
- The best reason to use redux-thunk is to keep reducers pure.
- For example; we use api operations and async in actions.
**Why do we use async?**
Our response can return 1second or 10 second. It's response time is uncertain. If we don't use async, action can return without response doesn't return. Thus, empty value send to reducer in payload. It dispatches the response using middleware. 

- wait response and dispatch.

```javascript
export const getAll = async () => {
  var result = await axios("http://apiadresimiz.com/users");
  return {
    type: "Get_All",
    payload: result,
  };
};
```

After this operation, we get this error.
!["This is an error message image"](./assets/images/redux-thunk-error-image.webp)

**Why do we get this error message?**
Because we use ES6 but this is converted ES5 on background. We have to send object in action payload part. If we use Api in action, the object is not returned from Api process. Thus, we cannot send object and this cause this error.

**!Important**
If we want to use async, we get this error.

Because of this situation, we can use redux-thunk. If we add redux-thunk middleware, response is waited and dispatched to reducers.

```javascript
export const getAll = () => {
  return async (dispatch) => {
    var result = await axios("http://apiadresimiz.com/users");
    dispatch({
      type: "Get_All",
      payload: result,
    });
  };
};
```

```javascript
//Here, since the synchronous operation depends on the completion of the asynchronous request, we first need to dispatch the asynchronousOperation. When the asynchronous operation is completed, we can activate the synchronous operation we want according to the response.
export const asenkronIslem = (params) => {
  return (dispatch, getState) => {
    fetch("http://example.com").then((response) => {
      dispatch(senkronIslem(response));
    });
  };
};
```
