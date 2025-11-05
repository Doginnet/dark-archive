## Intro

This is going to be part of my complete music portfolio web page, this
will be put into sketches module/component later on, but for now it's gonna be a standalone version
of my unfinished or finished, but not sorted into separate projects tracks
The idea will be to make an interactive mix constructor of my sketches, so that the user
might chose what stems, loops, or layers to add and to remove on the fly, making their 
own unique mixes of the composition.

## Features to implement

- A player controller for the catalog track preview and for certain internal loops/stems
that will interchangably stop playback of other tracks that interfere with the current track's playback (e.g. in the catalog playing different track will stop the playback of the previous one) 
- The master clock feature that will synchronize internal tracks of a composition
- Some gif/audiowave visualisations on the track's card during playback
- Main index catalog page containing different sketch genre pojects
- Current projects so far are (names may change in the future): 
	* Hex Step (DnB, Jungle music)
	* Dark Cut (dark ambient / industrial techno)
	* Haunted Garrage
	* Mellow Tapes (House, Melodic Techno)

#### Component features

- Improved buttons
	- fix the play button font-size
- Horizontal cards for genre pages
- breadcrumbs
- Some boilerplate animations

## Tools and Packages

- Tone.js 
- Canvas
- React
- Tailwind
- lucide-react
- shadnc

## TODO

- [ ] Integrate a logo into the main header component.
- [ ] Implement unique styling for each `GenreCard` (colors, title fonts) based on its theme.
- [ ] Design and implement a custom mouse pointer.
- [ ] Design and implement a global custom audio player with shuffle, play/pause, next/prev, download, and a tracklist dropdown.
