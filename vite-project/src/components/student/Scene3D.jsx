import React from 'react'

// Pure CSS/GPU 3D animated background — floating cubes, a tilted ring and
// soft glowing orbs rotating in 3D space behind the whole app.
const Scene3D = () => {
  return (
    <div className="scene-3d" aria-hidden="true">
      <div className="scene-3d__grid" />

      <div className="shape-3d" style={{ top: '12%', left: '8%', width: 70, height: 70 }}>
        <div className="shape-3d__cube">
          <div className="shape-3d__face" style={{ transform: 'translateZ(35px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(180deg) translateZ(35px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(90deg) translateZ(35px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(-90deg) translateZ(35px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateX(90deg) translateZ(35px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateX(-90deg) translateZ(35px)' }} />
        </div>
      </div>

      <div className="shape-3d" style={{ top: '62%', left: '85%', width: 46, height: 46, animationDelay: '-4s' }}>
        <div className="shape-3d__cube" style={{ animationDuration: '13s', animationDirection: 'reverse' }}>
          <div className="shape-3d__face" style={{ transform: 'translateZ(23px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(180deg) translateZ(23px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(90deg) translateZ(23px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(-90deg) translateZ(23px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateX(90deg) translateZ(23px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateX(-90deg) translateZ(23px)' }} />
        </div>
      </div>

      <div className="shape-3d" style={{ top: '30%', left: '78%', width: 34, height: 34 }}>
        <div className="shape-3d__cube" style={{ animationDuration: '9s' }}>
          <div className="shape-3d__face" style={{ transform: 'translateZ(17px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(180deg) translateZ(17px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(90deg) translateZ(17px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateY(-90deg) translateZ(17px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateX(90deg) translateZ(17px)' }} />
          <div className="shape-3d__face" style={{ transform: 'rotateX(-90deg) translateZ(17px)' }} />
        </div>
      </div>

      <div className="shape-3d shape-3d__ring" style={{ top: '8%', left: '68%', width: 220, height: 220 }} />
      <div className="shape-3d shape-3d__ring" style={{ top: '70%', left: '4%', width: 160, height: 160, animationDuration: '32s' }} />

      <div className="shape-3d shape-3d__orb" style={{ top: '18%', left: '30%', width: 120, height: 120 }} />
      <div className="shape-3d shape-3d__orb" style={{ top: '55%', left: '55%', width: 90, height: 90, animationDelay: '-6s' }} />
      <div className="shape-3d shape-3d__orb" style={{ top: '80%', left: '75%', width: 60, height: 60, animationDelay: '-2s' }} />
    </div>
  )
}

export default Scene3D
