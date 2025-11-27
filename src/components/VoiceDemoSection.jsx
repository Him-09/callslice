import React, { useState, useRef } from 'react'

const VoiceDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)

  const capabilities = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: 'Natural Conversation',
      description: 'Sounds human, understands context'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Instant Processing',
      description: 'Zero wait time, immediate response'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      label: 'Handles Modifications',
      description: 'Manages complex custom orders'
    },
  ]

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (e) => {
    const progressBar = e.currentTarget
    const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth
    const newTime = clickPosition * duration
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section id="demo" className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-black text-white text-xs font-semibold rounded-full mb-4">
            LIVE DEMO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
            Hear it in action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Listen to a real customer call handled entirely by our AI assistant
          </p>
        </div>

        {/* Audio Player - Enhanced */}
        <div className="mb-6">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-lg">
            {/* Waveform visualization */}
            <div className="mb-6 h-24 flex items-end justify-between gap-1 px-4">
              {Array.from({ length: 60 }).map((_, i) => {
                const height = 20 + Math.sin(i * 0.3) * 40 + Math.random() * 25
                const isActive = isPlaying && (currentTime * 10) % 60 > i - 2 && (currentTime * 10) % 60 < i + 2
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-150 ${
                      isActive
                        ? 'bg-gradient-to-t from-[#F63A6E] to-[#2979FF]'
                        : 'bg-gray-200'
                    }`}
                    style={{
                      height: `${height}%`,
                      opacity: i / 60 < currentTime / (duration || 100) ? 1 : 0.4,
                    }}
                  />
                )
              })}
            </div>

            {/* Progress bar */}
            <div
              className="mb-4 h-1.5 bg-gray-100 rounded-full cursor-pointer relative overflow-hidden"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-gradient-to-r from-[#F63A6E] to-[#2979FF] rounded-full transition-all"
                style={{ width: `${(currentTime / (duration || 100)) * 100}%` }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePlayPause}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                <span>{formatTime(currentTime)}</span>
                <span className="text-gray-300">/</span>
                <span>{formatTime(duration || 90)}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                  Demo Call
                </span>
              </div>
            </div>

            {/* Hidden audio element */}
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            >
              {<source src="/audio.mp3" type="audio/mpeg" />}
            </audio>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white border-2 border-gray-200 hover:border-black transition-all hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
                  {capability.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black mb-1">
                    {capability.label}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-1 sm:py-2 bg-black text-white rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm">100% AI-handled — No human intervention needed</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VoiceDemoSection
