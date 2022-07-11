import React, {useState} from 'react'
import { Form, Button, Col } from 'react-bootstrap'

const Contact = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='contact'>
      <h1 className='text-center p-5'><span>C</span>ontact</h1>
      <div className='hako'>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='text-white'>

          <Form.Group className="mb-4" controlId="formGroupName">
            <Form.Label>お名前　<span className='required'>必須</span></Form.Label>
              <Form.Control type="name" placeholder="お名前" required/>
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">お名前を入力して下さい。</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGroupEmail">
            <Form.Label>メールアドレス　<span className='required'>必須</span></Form.Label>
            <Form.Control type="email" placeholder="メールアドレス" required />
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">メールアドレスを入力して下さい。</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGroupSelect">
            <Form.Label>お問合せ種別　<span className='required'>必須</span></Form.Label>
            <Form.Select>
              <option>制作依頼</option>
              <option>相談</option>
              <option>その他</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGroupContent">
            <Form.Label>お問合せ内容　<span className='required'>必須</span></Form.Label>
            <Form.Control as="textarea" rows={5} type="text" placeholder="お問合せ内容" required/>
            <Form.Control.Feedback>OK</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">お問合せ内容を入力して下さい。</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formFileMultiple" >
            <Form.Label>添付ファイル</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>

          <div className='text-center'>
            <Button className='mb-4' size="lg" type="submit">送信</Button>
          </div>
        </Form>
      </div>
    </div>

  )
}

export default Contact
