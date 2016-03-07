import React from 'react'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import App from '../src/container/App'

describe('Enzyme Shallow', () => {
  it('App\' title should be Todos', () => {
    let app = shallow(<App />)

    expect(app.find('h1').text()).to.equal('Todos')
  })
})

describe('Enzyme Render', () => {
  it('Todo item should not have completed', () => {
    let app = render(<App />)

    expect(app.find('.completed').length).to.equal(0)
  })

  it('Todo item should has one item', () => {
    let app = render(<App />)

    expect(app.find('.view').length).to.equal(1)
  })
})

describe('Enzyme Mount', () => {
  it('Delete to Todo', () => {
    let app = mount(<App />)
    let todoLength = app.find('li').length

    app.find('.destroy').at(0).simulate('click')

    expect(app.find('li').length).to.equal(todoLength - 1)
  })

  it('Add a Todo', () => {
    let app = mount(<App />)
    let todoLength = app.find('li').length

    app.find('.new-todo').get(0).value = 'new todo'

    app.find('.new-todo').at(0).simulate('keydown', {
      keyCode: 13
    })

    expect(app.find('li').length).to.equal(todoLength + 1)
  })
})
