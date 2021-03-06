var Janko = React.createClass({
  render: function() {
    return (
      <div className="keyboard">

        <div className='row-one'>
          <span className = 'row-keys'>
            <Key noteName='C4' qwertyKey='A'/>
            <Key noteName='D4' qwertyKey='S'/>
            <Key noteName='E4' qwertyKey='D'/>
            <Key noteName='F#4' qwertyKey='F'/>
            <Key noteName='G#4' qwertyKey='G'/>
            <Key noteName='A4' qwertyKey='H'/>
            <Key noteName='B4' qwertyKey='J'/>
            <Key noteName='C5' qwertyKey='K'/>
            <Key noteName='D5' qwertyKey='L'/>
            <Key noteName='E5' qwertyKey=';'/>
          </span>
        </div>

        <div className='row-two'>
          <span className = 'row-keys'>
            <Key noteName='C4' qwertyKey='A'/>
            <Key noteName='D4' qwertyKey='S'/>
            <Key noteName='E4' qwertyKey='D'/>
            <Key noteName='F4' qwertyKey='F'/>
            <Key noteName='G4' qwertyKey='G'/>
            <Key noteName='A4' qwertyKey='H'/>
            <Key noteName='B4' qwertyKey='J'/>
            <Key noteName='C5' qwertyKey='K'/>
            <Key noteName='D5' qwertyKey='L'/>
            <Key noteName='E5' qwertyKey=';'/>
          </span>
        </div>

      </div>
    )
  }
});
