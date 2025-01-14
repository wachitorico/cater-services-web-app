import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Help.scss";
import { RiQuestionnaireLine } from "react-icons/ri";
import { useState } from "react";

export default function Help() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const faqData = [
    {
<<<<<<< Updated upstream
      question: "Q: What is Ate Gang's Catering Services?",
      answer:
        "Ate Gang's Catering Services is a local business in the Panabo area that offers catering services to its clients.",
  },
    {
      question: "Q: How can I place an order with Ate Gang's Catering Services?",
      answer:
        "A: You can place an order with Ate Gang's Catering Services by using the online ordering ",
    },
    {
      question: "Q: How does the online food ordering method work?",
      answer:
        'Customers can order food online and have it delivered to their location.',
    },
    {
      question: "Q: Can I customize my order?",
      answer:
        "Yes, you can customize your order by selecting the dishes you want from the menu ",
    },
    {
      question: "Q: How do I pay for my order?",
      answer:
        "You can pay for your order online by Cash on Delivery or Gcash Online Payment Services.",
    },
    {
      question: "Q: How does Ate Gang's Catering Services ensure the quality and safety of its food?",
      answer:
        "A: Ate Gang's Catering Services follows strict food safety guidelines and uses high-quality ingredients to ensure the quality and safety of its food.",
    },
    {
      question: "Q: What is the delivery time for my order?",
      answer:
        "A: Delivery times vary depending on your location and the volume of orders. ",
=======
      question: "How do I access the ordering system?",
      answer:
        "'Ate Gang's Online Catering Website' through your web browser. Simply enter the website's URL in the address bar and press Enter. Once on the website, you can create an account or log in if you already have one to start using the ordering system.",
    },
    {
      question: "Can I cancel my order after it has been placed?",
      answer:
       "'The cancellation of orders may be subject to the policies of Ate Gang's Catering Services. To cancel an order, you should contact their customer service directly. They will assist you in the cancellation process and provide further instructions based on their specific procedures.",
    },
    {
      question: "What payment methods are accepted through the ordering system?",
      answer:
        "The ordering system accepts various payment methods, which may include Gcash online payment and COD (Cash on Delivery). The available payment methods will be displayed during the checkout process on the website, and you can choose the one that is most convenient for you.",
    },
    {
      question: "How long does it take for my order to be processed and shipped?",
      answer:
        "The processing and shipping time for your order may vary depending on factors such as the availability of the dishes you ordered, the delivery location, and the current volume of orders. Once you have placed your order, the estimated processing and shipping time will be provided to you. This information should be available in your order confirmation or on the website. If you have any specific concerns or inquiries about your order's processing and shipping time, it is recommended to contact Ate Gang's Catering Services directly for more accurate information.",
    },
    {
      question: "Can I track the status of my order through the ordering system?",
      answer:
        "Yes, you should be able to track the status of your order through the ordering system. Once your order has been confirmed and processed, you may receive a tracking number or order status update. You can use this information to track the progress of your order, including its preparation and delivery stages. The specific tracking features and methods may vary depending on the system implemented by Ate Gang's Catering Services. You can check the website or contact their customer service for details on how to track your order through their ordering system.",
>>>>>>> Stashed changes
    },
    {
      question: "What should I do if I receive the wrong item or if my order is damaged?",
      answer:
        "If you receive the wrong item or if your order is damaged, it is advisable to contact Ate Gang's Catering Services immediately to report the issue. They will assist you in resolving the problem and provide guidance on the necessary steps to take. This may involve returning the incorrect or damaged item, receiving a replacement, or obtaining a refund, depending on their policies and the specific circumstances of the situation.",
    },
    {
      question: "Is there a limit to how many items I can order at once through the ordering system?",
      answer:
        "The ordering system may have certain limitations on the number of items you can order at once. These limitations can vary depending on factors such as the capacity of Ate Gang's Catering Services and the availability of ingredients or dishes. During the ordering process, you may encounter restrictions on quantities or specific guidelines regarding the maximum number of items allowed per order. If you have specific concerns about ordering a large quantity of items, it is recommended to check the ordering system or contact Ate Gang's Catering Services for more information.",
    },
    {
      question: "Are there any discounts or promotions available through the ordering system?",
      answer:
        "Discounts and promotions may be available through the ordering system. Ate Gang's Catering Services may offer special deals, seasonal promotions, or discounts for certain events or occasions. These discounts and promotions can vary over time, so it is advisable to check the ordering system or the website for any current offers. Additionally, you may also receive information about discounts or promotions through email newsletters or other communication channels provided by Ate Gang's Catering Services.",
    },
    {
      question: "How do I update my shipping address or billing information in the ordering system?",
      answer:
        "To update your shipping address or billing information in the ordering system, you will typically need to access your account settings or profile. Within the system, you should be able to find an option to manage your account details, which may include updating your shipping address and billing information. The specific steps to update this information can vary depending on the ordering system implemented by Ate Gang's Catering Services. It is recommended to navigate through your account settings or contact their customer service for guidance on how to update your information accurately.",
    },
    {
      question: "Is it possible to request a refund through the ordering system if I am not satisfied with my order?",
      answer:
        "If you are not satisfied with your order and wish to request a refund, it is best to refer to the refund policy of Ate Gang's Catering Services. The ordering system may provide information on their refund policy, including the eligibility criteria and the process to follow for requesting a refund. Typically, you would need to contact their customer service directly to initiate a refund request and provide relevant details about your order. They will guide you through the necessary steps and address your concerns regarding the refund process.",
    },
    
  ];

  return (
    <>
      <Navbar />
      <section className="faq-body">
        <div className="faq-container">
          <div className="faq-text">
            <RiQuestionnaireLine className="question-chat" />
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="faq-content">
            <div className="accordion-container">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <div
                    className="accordion-header"
                    onClick={() => handleAccordionClick(index)}
                  >
                    {item.question}
                  </div>
                  <div
                    className={`accordion-content ${
                      activeAccordion === index ? "active" : ""
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
