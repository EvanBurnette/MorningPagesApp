import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium molestias ab fugiat obcaecati amet dolore laboriosam temporibus? Eligendi vitae doloribus rem iusto. Cum ipsum necessitatibus explicabo fugit quam quis exercitationem sint provident veritatis rem aspernatur itaque odio nam cupiditate, deleniti aperiam illo vero cumque sunt beatae inventore similique temporibus voluptate in! Illum modi delectus assumenda atque similique totam explicabo! Assumenda voluptates non ex placeat saepe doloremque quas fugit suscipit quos, distinctio velit quidem modi. Voluptatibus tempora sunt impedit tempore voluptas delectus quidem doloribus. Voluptas quae tempore tempora est dolores asperiores placeat? Eos, cupiditate. Fugit expedita exercitationem laboriosam numquam eius dolorem omnis, doloremque dicta qui, voluptates inventore illum maxime suscipit repellat doloribus voluptate itaque? Illum eveniet, repellat deserunt harum veniam a. Animi sapiente vitae quas, exercitationem aspernatur quibusdam id voluptas deserunt labore cum magnam dolore iusto aliquam eaque. Cum corporis quia eligendi natus consectetur laboriosam molestias ipsum architecto voluptate omnis sunt, ad fuga quisquam libero est impedit officiis earum, praesentium ratione alias unde accusamus hic voluptatum! Eveniet quisquam maxime architecto vitae! Recusandae fuga delectus corporis harum deserunt consequatur consectetur iste? Repellendus natus sint dicta laboriosam vitae voluptate nisi id laudantium, blanditiis incidunt? Molestias ullam modi minus amet ad, fuga consequatur, sit, laboriosam ex nam tempore hic quaerat dicta iste facere vel quam eum? Cum tenetur, voluptas ab itaque atque, ullam assumenda molestiae totam, accusantium eum nobis earum veritatis adipisci sed. Amet aspernatur illo maiores quisquam. In facilis corporis architecto voluptatibus, ratione illo. Odit rem impedit, unde dicta distinctio rerum autem deleniti sapiente suscipit possimus sunt alias natus recusandae exercitationem. Molestias odio consequatur sed ea officiis deserunt, voluptatum delectus aliquam praesentium eveniet eligendi exercitationem distinctio cum, impedit nesciunt nisi ab magni adipisci neque hic architecto blanditiis id? Deleniti mollitia neque perspiciatis blanditiis nostrum, atque veritatis. Est minus sunt blanditiis? Similique magni saepe sunt eaque sequi recusandae accusamus nemo molestias adipisci, in beatae quidem modi qui atque soluta corporis, maxime quam animi itaque delectus! Praesentium doloribus, distinctio eaque quidem dignissimos similique, delectus totam mollitia consequatur enim, consectetur tenetur omnis debitis earum magni eius necessitatibus possimus impedit? Blanditiis assumenda earum error laboriosam fugiat minima, enim veniam veritatis distinctio. Illo beatae repellendus doloribus culpa, ratione et est dolor! Ducimus veniam labore, facere temporibus a debitis! Quaerat placeat pariatur hic, inventore quia id adipisci, ipsam autem necessitatibus dicta sed minima ea asperiores dolores impedit aspernatur est laborum consequuntur quasi dolor delectus earum. Eos earum enim, molestiae laboriosam alias doloremque officia blanditiis tempore, excepturi quod qui optio quo! Non officia molestiae iste aliquid cupiditate iusto aspernatur? Ullam unde consectetur iure voluptatem distinctio hic eius repellendus sed soluta repudiandae aspernatur iusto cupiditate explicabo nemo dolores, maiores corporis est exercitationem praesentium magni quia doloremque quam temporibus! Aut cupiditate nisi eius eaque, totam exercitationem pariatur dolor asperiores quam, reprehenderit quod iusto voluptas distinctio ipsum ducimus voluptates ipsa saepe non corrupti. Ipsam architecto obcaecati, cum, voluptatibus asperiores eius, ex officiis culpa ab officia aliquam optio fuga cupiditate explicabo. Quam consectetur tempore voluptate nisi ipsum aliquam earum eveniet eaque! Quas blanditiis earum vero ullam voluptas fugiat nam commodi soluta, ad amet dignissimos facilis explicabo enim nostrum perferendis corporis est at! Totam voluptatibus eveniet iure animi pariatur amet aut sed quis, nam quam dolore consectetur. Rem ullam sapiente voluptatem molestias ipsam quaerat aut atque rerum repellat, perferendis quasi nesciunt optio laboriosam inventore amet quidem, architecto adipisci autem, at qui unde. Aut dicta recusandae eius voluptatibus dignissimos deleniti! Modi vero delectus voluptate, ipsum minima vel nobis architecto obcaecati unde, temporibus odio blanditiis velit vitae officia quae perspiciatis necessitatibus iure at quia totam saepe id soluta? Voluptatem ratione totam aperiam possimus, earum omnis cum, quos molestias error saepe iure ullam dolorem nulla consequuntur. Delectus excepturi officia ipsum, nam maiores culpa id dolorem quibusdam minima blanditiis tempore ratione vitae voluptates eaque unde harum quidem nulla ducimus facere fuga assumenda? Accusantium officia dolores, voluptatibus sit porro facilis itaque nesciunt nobis, ducimus maxime, veritatis autem? Asperiores distinctio repellat, reiciendis nobis unde dolor necessitatibus similique totam molestias repudiandae esse ullam officiis corrupti voluptatem debitis magni sit harum laudantium qui quisquam ducimus? Sunt fuga, magni ex suscipit aperiam voluptate labore iste accusamus, accusantium ea dolorem temporibus at explicabo, sapiente dolor sequi beatae ipsam saepe? Harum sint facilis assumenda ex aliquam quaerat doloribus vitae minima iste cumque ab laudantium molestiae alias ullam quod mollitia impedit nam perferendis dignissimos blanditiis, enim quia veritatis. Laudantium incidunt maiores itaque iste alias quos ratione, blanditiis, expedita amet minus nulla eaque necessitatibus omnis officiis. Facilis, recusandae laborum placeat adipisci, quibusdam a pariatur maiores laboriosam, cupiditate debitis reprehenderit porro non sed fugiat! Rem deleniti et doloribus, velit iusto ullam numquam sed natus, sunt ut accusantium animi! Laboriosam, labore aspernatur quo corrupti accusamus numquam, odio asperiores atque ipsum blanditiis, obcaecati rerum natus amet neque illum at ipsam maiores est non sint. Deleniti ullam porro, labore veritatis praesentium suscipit quibusdam repellat ad dolorum sapiente, ratione temporibus quia sunt nemo architecto modi. Officia, eveniet. Necessitatibus recusandae nostrum quas ut ratione tempora, exercitationem inventore facilis, non aut repellendus. Sed ex dolore consequuntur iste cum est enim excepturi blanditiis quae quos! Voluptatem repudiandae harum laboriosam autem eos praesentium suscipit, ut aut omnis blanditiis vel officia at nobis repellat et nulla fuga, eveniet ipsa amet officiis fugiat aperiam vitae minima? Libero corporis quas dolorem, maxime eum aspernatur dolor voluptatem adipisci maiores repudiandae earum qui id odio tempora facilis dicta? Esse, sapiente itaque, ipsam magnam sint nam suscipit, ipsa blanditiis numquam saepe nisi magni est minima. Enim similique iste nesciunt ratione autem possimus unde, quaerat exercitationem provident magni magnam dolores nemo velit sequi quibusdam praesentium iure aut, blanditiis animi voluptatem. Vitae, culpa. Accusantium modi quidem provident dolor, ad ea hic? Explicabo, obcaecati sit! Praesentium, iure doloremque ullam illum ex vel. Fuga voluptatibus, autem magni totam tempora, iusto excepturi eos accusamus laboriosam distinctio expedita repellat minima nulla consequatur! Minima, reprehenderit nemo alias rerum nisi aperiam perferendis quasi nulla quia in, voluptatem laboriosam corporis. Aliquam corrupti omnis itaque fugit est illum neque libero nobis voluptatibus explicabo asperiores voluptates dolores dolorum at magnam eaque, impedit vel!");
  const [text, setText] = useState('');
  const [CAPS, setCAPS] = useState(false);

  useEffect(() => {
    // Define the event handler inside the useEffect so it has access to current state
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault();
      }
      if (e.key === 'Backspace') {
        setText(prevText => {
          if (prevText === '') return '';
          return prevText.slice(0,-1);
        })
        return;
      }
      if (e.key === 'Alt' || e.key === 'Tab' || e.key === 'Meta' || e.key === 'Control' || e.key === "CapsLock"){
        return;
      }
      if (e.key === "Shift") {
        setCAPS(()=>true);
        return;
      }
      if (e.key === "Enter") {
        setText(prevText => prevText + '\n');
        return;
      }
      setText(prevText => prevText + (CAPS ? e.key.toUpperCase() : e.key));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setCAPS(()=>false);
      }
    }

    // Attach the event listener
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // Empty dependency array ensures this useEffect runs only once

  return (
    <>
      <h1>
        {text.length > 0 ? `words:${text.split(' ').filter(string=>string!='').length}\nletters:${text.replaceAll(' ', '').length}` : 'start typing morning pages'}
      </h1>
      {/* {<pre>{text}</pre>} */}
      {text.split(' ').filter(string=>string!='').length > 1000 ? `${text}` : ``}
    </>
  )
}

export default App;
