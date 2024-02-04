import { useState } from "react";
import { getCardByName } from "src/fetch/mtg/get";

export default function Home() {
  const [cardUri, setCardUri] = useState<string>();
  const [cardName, setCardName] = useState('');

  return (
    <div>
      <div style={{ margin: '50px' }}>
        <input onChange={(e) => setCardName(e.target.value)} />
        <button type={'button'} onClick={() => getCardByName(cardName).then((card) => setCardUri(card?.image_uris?.png))}>Search</button>
      </div>
      <div style={{ marginBottom: '50px' }}>
        <img style={{ width: '300px' }} src={cardUri} />
      </div>
    </div>
  )
}
