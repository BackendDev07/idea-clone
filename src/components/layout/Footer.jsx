import React from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TelegramIcon,
  CreatedIcon,
} from '../../assets/icons';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const Footer = () => {
  return <footer className='footer'>
    <div className="container">
          <div className="footer-footer">
          <div className="footer-buttons">
        <div className="footer-logo">
            <Logo/>
        </div>
        <div className="footer-button-links">
        <button>  <TelegramIcon/></button>
         <button>  <FacebookIcon/></button>
       <button>   <InstagramIcon/></button>
        </div>
      </div>
      <Accordion defaultIndex={[5]} allowMultiple color={'white'}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box  flex='1' textAlign='left'>
        <h1>Обратная связь</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="footer-button-link"> 
      <button>Оставить сообщение</button>
      <h2>71 230 77 99</h2>
      <p>Ежедневно с 9:00 до 21:00</p>
      <h3>info@ideastore.uz</h3>
      <p>Почта</p>
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <h1>Информация</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="links">
    <p>Статьи</p>
          <p>Рассрочка</p>
          <p>Оферта</p>
          <p>Вакансии</p>
        </div>
          
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <h1>Idea.uz</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="links">
          
          <p>О нас</p>
          <p>Наши магазины</p>
          <p>Контакты</p>
        </div>
          
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <h1>Покупателям</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="links">
       
          <p>Вопросы и ответы</p>
          <p>Как сделать заказ на сайте</p>
        </div>
          
    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </div>
         
    </div>
  </footer>
  
}

export default Footer
