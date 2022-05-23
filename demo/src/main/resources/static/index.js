Stream = require('node-rtsp-stream')
stream = new Stream({
	name: 'name',
	streamUrl: 'rtsp://admin:password@10.1.112.131:554/stream/profile1=r',
	wsPort: 9999,
	ffmpegOptions: { // options ffmpeg flags
		'-stats': '', // an option with no neccessary value uses a blank string
		'-r': 30 // options with required values specify the value after the key
	}
})