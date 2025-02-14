require "application_system_test_case"

class LoginTest < ApplicationSystemTestCase
  setup do
    @account = create(:account)
    @user = create(:user, account: @account, owner: true)
  end

  test 'Login with valid credentials will be successful' do
    visit '/login'
    assert_selector 'h1', text: 'Welcome Back!'

    fill_in 'Email', with: @user.email
    fill_in 'Password', with: @user.password
    click_on 'Login'

    assert_selector 'div', text: 'Signed in successfully.'

    click_on 'John Doe'
    click_on 'Logout'
    assert_selector 'div', text: 'Signed out successfully.'
  end

  test 'Login with invalid credentials will fail' do
    visit '/login'

    fill_in 'Email', with: @user.email
    fill_in 'Password', with: 'invalid'
    click_on 'Login'

    assert_selector 'div', text: 'Invalid email or password!'
  end
end
