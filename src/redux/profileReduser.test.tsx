import {addPostActionCreator, deletePostActionCreator, profileReduser} from './profileReduser';


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ],
    profile: null,
    status: ''
}

test('length of new post should be incremented', () => {
    let action = addPostActionCreator('hey')

    let newState = profileReduser(state,action)

    expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
    let action = addPostActionCreator('hey')

    let newState = profileReduser(state,action)

    expect(newState.posts[2].message).toBe('hey')
})


test('length of after deleting message should be decrement', () => {
    let action = deletePostActionCreator(1)

    let newState = profileReduser(state,action)

    expect(newState.posts.length).toBe(1)
})

test(`after deleting length shouldn't be decrement if id is correct`, () => {
    let action = deletePostActionCreator(1000)

    let newState = profileReduser(state,action)

    expect(newState.posts.length).toBe(2)

})