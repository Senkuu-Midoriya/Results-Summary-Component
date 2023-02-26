import memory from "../public/memory.svg"
import reaction from "../public/reaction.svg"
import visual from "../public/visual.svg"
import verbal from "../public/verbal.svg"
import Image from "next/image"
const Component = () => {
  return (
    <section className='container'>
        <div className="section1">
            <p>Your Result</p>
            <div className="circle">
                <p>76
                    <span>
                        of 100
                    </span>
                </p>     
            </div>
            <p>Great</p>
            <p>You scored higher than 65% of<br/> the people who have taken<br/> these tests.</p>
        </div>
        <div className="section2">
            <p className="header">Summary</p>
            <div className="box1">
                <div className="cont1">
                    <Image alt="" src={reaction}/>
                    <p>Reaction</p>
                </div>
                <p>80</p>
            </div>
            <div className="box2">
                <div className="cont2">
                    <Image alt="" src={memory}/>
                    <p>Memory</p>
                </div>
                <p>92</p>
            </div>
            <div className="box3">
                <div className="cont3">
                    <Image alt="" src={verbal}/>
                    <p>Verbal</p>
                </div>
                <p>61</p>
            </div>
            <div className="box4">
                <div className="cont4">
                    <Image alt="" src={visual}/>
                    <p>Visual</p>
                </div>
                <p>72</p>
            </div>
            <button>
                Continue
            </button>
        </div>

    </section>
  )
}

export default Component