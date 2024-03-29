import "./index.scss";
import samplepack from "../../assets/images/icesamplepack.png";
import MultiPlayer from "../Soundplayer";
import {
  Mastercard,
  Maestro,
  Boleto,
  Logo,
  Visa,
  Paypal,
  AmericanExpress,
} from "../../assets/svg";
import { TextExpander } from "../TextExpander";

export const ProductDetailsAndPayment = () => {
  return (
    <div className="product_details">
      <div>
        <img
          className="product_details_image"
          alt="icesamplepack"
          src={samplepack}
        />
        <Showcase />
      </div>

      <div></div>
      <div className="product_details_container">
        <div className="product_details_info">
          <ProductDetails />
          <Tags />
          <Details />
        </div>
        <div className="product_details_pricing">
          <PricingDetails />
          <AdditionalDetails />
        </div>
      </div>
    </div>
  );
};

export const Tags = () => {
  return (
    <>
      <h2>Tags</h2>

      <div className="container">
        {[
          "Cymbals",
          "Kicks",
          "Snares",
          "Cymbals",
          "Kicks",
          "Snares",
          "Cymbals",
          "Kicks",
          "Snares",
          "Snares",
        ].map((item) => {
          return <div className="product_details_tags_card">{item}</div>;
        })}
      </div>
    </>
  );
};

const ProductDetails = () => {
  return (
    <>
      <p className="product_details_info_title">ICE</p>
      <p>
        Produtor:
        <Logo width={60} height={14} />
      </p>
      <br />
      <p>Descrição</p>
      <TextExpander>
        Ultrices fames tristique quis ipsum maecenas nam ipsum mi sit. Commodo,
        praesent quam volutpat lectus mauris senectus etiam lorem eu. Nec
        sollicitudin tincidunt tincidunt quis nibh sit. Semper in ac mollis
        posuere nulla. In vel, nam justo arcu cursus. Ultrices fames tristique
        quis ipsum maecenas nam ipsum mi sit. Commodo, praesent quam volutpat
        lectus mauris senectus etiam lorem eu. Nec sollicitudin tincidunt
        tincidunt quis nibh sit. Semper in ac mollis posuere nulla. In vel, nam
        justo arcu cursus. Ultrices fames tristique quis ipsum maecenas nam
        ipsum mi sit. Commodo, praesent quam volutpat lectus mauris senectus
        etiam lorem eu. Nec sollicitudin tincidunt tincidunt quis nibh sit.
        Semper in ac mollis posuere nulla. In vel, nam justo arcu cursus.
      </TextExpander>
    </>
  );
};

const Showcase = () => {
  return (
    <div className="product_details_showcase">
      <h3 className="product_details_showcase_title">Amostras</h3>
      <div className="product_details_showcase_list">
        <MultiPlayer
          urls={[
            "../../assets/sound/test.wav",
            "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
            "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
          ]}
        />
      </div>
    </div>
  );
};

const PricingDetails = () => {
  return (
    <>
      <p className="product_details_pricing_title">Á VISTA POR:</p>
      <h1 className="product_details_pricing_price">R$ 39,90</h1>

      <p>EM 6X R$ 6,65 SEM JUROS</p>
      <p>MÉTODOS DE PAGAMENTO</p>
      <div className="cardbrands_container">
        <Mastercard className="cardbrands_container_cardbrand" />
        <Maestro className="cardbrands_container_cardbrand" />
        <Visa className="cardbrands_container_cardbrand" />
        <Paypal className="cardbrands_container_cardbrand" />
        <AmericanExpress className="cardbrands_container_cardbrand" />
        <Boleto fill="white" className="cardbrands_container_cardbrand" />
      </div>

      <button className="product_details_pricing_button">Comprar</button>
      <p className="product_details_pricing_cart">ADICIONAR AO CARRINHO</p>
    </>
  );
};

const Details = () => {
  return (
    <div className="details">
      <p className="details_title"> Caracteristicas</p>
      <p className="details_subtitle">Tamanho</p>
      <p>124MB</p>

      <p className="details_subtitle">Número de Samples</p>
      <p>1.256</p>
      <p className="details_subtitle">Formatos de Arquivo</p>
      <p>.wav/.mp3/.midi</p>
    </div>
  );
};

const AdditionalDetails = () => {
  return (
    <div className="details_rightside">
      <p className="details_subtitle">Categoria</p>
      <p>Sample Pack</p>

      <p className="details_subtitle">Gênero</p>
      <p>Ambience</p>
      <p className="details_subtitle">Licença</p>
      <p>Sem direitos autorais</p>
    </div>
  );
};
