import React from 'react'

import Button from 'react-bootstrap/Button';
import style from './ProfileEdit.module.css'
import Form from 'react-bootstrap/Form';


function ProfileEdit() {
  return (
    <div className='row'>
        <div className='col-xl-12 order-xl-1'>
        <div className="card bg-light  border-0">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h1 className="mb-0">Account Settings</h1>
              </div>
              </div>
              <hr/>
          </div>
          <div className='card-body bg-white'>
          <div className='row'>
            <div className='col-6'>
              <Form className={style.formEdit}>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="New Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control type="password" placeholder="Old Password" />
                  </Form.Group>
                  <Button className='mt-3' variant="dark" type="submit">
                    Submit
                  </Button>
                </Form>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProfileEdit