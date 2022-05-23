import React, {useRef} from 'react'
import Container from './Container'
import styles from './Contact.module.css'
import { useForm } from 'react-hook-form'
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import emailjs from 'emailjs-com'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function Contact() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const form = useRef();

  const onSubmit = (data, e) => {
    emailjs.sendForm('service_iczebk9', 'template_5jw8hwm', form.current, 'nvlPFV_vyDI6md6fE')
      .then((result) => {
        setOpenSuccess(true)
        e.target.reset()
      }, (error) => {
        setOpenError(true)
      });
  };
  return (
    <Container styles={{ background: '#2f2f2f' }} prevTab='portfolio' nextTab='about'>
      <div className={styles.container}>
        <h1>Get in touch</h1>
        <h3>If you wanna get in touch, talk to me about a project collaboration or just say hi,
          fill up the awesome form below or send an email to
          rafael@caferati.me
          and ~let's talk.</h3>
        <form ref={form} className={styles.form} 
          onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['input-div']}>
            <PersonIcon fontSize='medium' style={{color : '#7a7a7a'}}/>
            <input 
              name='name'
              {...register('name', {required : true})}  
              placeholder='fill your name'/>
            <div 
              className={styles.error}>
              {errors.name && <p className={styles.required}>*</p>}
            </div>
          </div>
          <div className={styles['input-div']}>
            <MailIcon fontSize='medium' style={{color : '#7a7a7a'}}/>
            <input 
              name='email'
              {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}  
              placeholder='enter your email address' />
            <div 
              className={styles.error}>
                {errors.email?.type === "required" && <p className={styles.required}>*</p>}
                {errors.email?.type === "pattern" && <PriorityHighIcon style={{ color: '#ef5350' }} />}
            </div>
          </div>
          <div className={styles['input-div']}>
            <MessageIcon fontSize='medium' style={{color : '#7a7a7a'}}/>
            <input 
              {...register('message', {required : true})} 
              name='message' 
              placeholder='write your message :)' />
            <div 
              className={styles.error}>
              {errors.message && <p className={styles.required}>*</p>}
            </div>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <Snackbar anchorOrigin={{ vertical : 'bottom' , horizontal : 'center'}} open={openSuccess} autoHideDuration={4000} onClose={()=>setOpenSuccess(false)}>
        <Alert onClose={() => setOpenSuccess(false)} severity="success">
          Success!
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openError} autoHideDuration={4000} onClose={()=>setOpenError(false)}>
        <Alert onClose={() => setOpenError(false)} severity="error">
          Your message could not be sent.
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Contact