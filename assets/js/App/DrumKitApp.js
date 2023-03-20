import { ZoneBuilder } from './Features/Zones/ZoneBuilder.js';

/**
 * 
 */
export class DrumKitApp
{
    run()
    {
        const keysContainer = document.querySelector('#keyBindings');

        // Initialise each instrument.
        for (const key in this.zones) {
            const instrument = this.zones[key];
            instrument.initialise();
            keysContainer.append(instrument.keyBindingElement);
        }

        // Set the key press listener for page.
        window.addEventListener('keypress', e =>
        {
            // Pass the event to each instrument, in turn.
            for (const key in this.zones) {
                const instrument = this.zones[key];
                if(instrument.onKeyPress(e)) break;
            }
        });
    }

    zones =
    {
        // =======================================================
        //  CRASH CYMBALS
        // =======================================================

        crash1: ZoneBuilder
            .Create('#crash1-touch')
            .WithDisplayName('Crash 1')
            .WithAnimation('#crash1', 'hitCrash')
            .WithSoundFile('crash2')
            .WithKeyBinding('Q')
            .Build(),

            
        crash2: ZoneBuilder
            .Create('#crash2-touch')
            .WithDisplayName('Crash 2')
            .WithAnimation('#crash2', 'hitCrash')
            .WithSoundFile('crash1')
            .WithKeyBinding('W')
            .Build(),

        crash3: ZoneBuilder
            .Create('#crash3-touch')
            .WithDisplayName('Crash 3')
            .WithAnimation('#crash3', 'hitCrash')
            .WithSoundFile('crash2')
            .WithKeyBinding('E')
            .Build(),

        crash4: ZoneBuilder
            .Create('#crash4-touch')
            .WithDisplayName('Crash 4')
            .WithAnimation('#crash4', 'hitCrash')
            .WithSoundFile('crash1')
            .WithKeyBinding('R')
            .Build(),

        crash5: ZoneBuilder
            .Create('#crash5-touch')
            .WithDisplayName('Crash 5')
            .WithAnimation('#crash6', 'hitCrash')
            .WithSoundFile('crash2')
            .WithKeyBinding('U')
            .Build(),

        crash6: ZoneBuilder
            .Create('#crash6-touch')
            .WithDisplayName('Crash 6')
            .WithAnimation('#crash5', 'hitCrash')
            .WithSoundFile('crash1')
            .WithKeyBinding('I')
            .Build(),

        crash7: ZoneBuilder
            .Create('#crash7-touch')
            .WithDisplayName('Crash 7')
            .WithAnimation('#crash7', 'hitCrash')
            .WithSoundFile('crash1')
            .WithKeyBinding('O')
            .Build(),

        // =======================================================
        //  RIDE CYMBALS
        // =======================================================

        ride1: ZoneBuilder
            .Create('#ride1-touch')
            .WithDisplayName('Ride 1')
            .WithAnimation('#ride1', 'hitRide')
            .WithSoundFile('ride1')
            .WithKeyBinding('Y')
            .Build(),

        ride2: ZoneBuilder
            .Create('#ride2-touch')
            .WithDisplayName('Ride 2')
            .WithAnimation('#ride1', 'hitRide')
            .WithSoundFile('ride2')
            .WithKeyBinding('7')
            .Build(),

        // =======================================================
        //  SPLASH CYMBALS
        // =======================================================

        splash1: ZoneBuilder
            .Create('#splash1-touch')
            .WithDisplayName('Splash')
            .WithAnimation('#splash1', 'hitCrash')
            .WithSoundFile('splash1')
            .WithKeyBinding('T')
            .Build(),

        // =======================================================
        //  CHINA CYMBALS
        // =======================================================

        china1: ZoneBuilder
            .Create('#china1-touch')
            .WithDisplayName('China')
            .WithAnimation('#china1', 'hitChina')
            .WithSoundFile('china1')
            .WithKeyBinding('P')
            .Build(),
        
        // =======================================================
        //  HI-HAT CYMBALS
        // =======================================================

        hihat1L: ZoneBuilder
            .Create('#hihat1L-touch')
            .WithDisplayName('Hi-Hat (Left)')
            .WithAnimation('#hihat1', 'hitHi')
            .WithSoundFile('hihat1')
            .WithKeyBinding('X')
            .Build(),

        hihat1R: ZoneBuilder
            .Create('#hihat1R-touch')
            .WithDisplayName('Hi-Hat (Right)')
            .WithAnimation('#hihat1', 'hitHi')
            .WithSoundFile('hihat2')
            .WithKeyBinding('N')
            .Build(),

        open1L: ZoneBuilder
            .Create('#open1L-touch')
            .WithDisplayName('Open Hi-Hat (Left)')
            .WithAnimation('#hihat1', 'hitHat')
            .WithSoundFile('open1')
            .WithKeyBinding('Z')
            .Build(),

        open1R: ZoneBuilder
            .Create('#open1R-touch')
            .WithDisplayName('Open Hi-Hat (Right)')
            .WithAnimation('#hihat1', 'hitHat')
            .WithSoundFile('open2')
            .WithKeyBinding('M')
            .Build(),
        
        // =======================================================
        //  TOM TOM DRUMS
        // =======================================================

        tom1: ZoneBuilder
            .Create('#tom1-touch')
            .WithDisplayName('Tom-Tom 1')
            .WithSoundFile('tom1')
            .WithKeyBinding('A')
            .Build(),

        tom2: ZoneBuilder
            .Create('#tom2-touch')
            .WithDisplayName('Tom-Tom 2')
            .WithSoundFile('tom2')
            .WithKeyBinding('S')
            .Build(),

        tom3: ZoneBuilder
            .Create('#tom3-touch')
            .WithDisplayName('Tom-Tom 3')
            .WithSoundFile('tom3')
            .WithKeyBinding('D')
            .Build(),

        tom4: ZoneBuilder
            .Create('#tom4-touch')
            .WithDisplayName('Tom-Tom 4')
            .WithSoundFile('tom4')
            .WithKeyBinding('F')
            .Build(),

        tom5: ZoneBuilder
            .Create('#tom5-touch')
            .WithDisplayName('Tom-Tom 5')
            .WithSoundFile('tom5')
            .WithKeyBinding('G')
            .Build(),

        tom6: ZoneBuilder
            .Create('#tom6-touch')
            .WithDisplayName('Tom-Tom 6')
            .WithSoundFile('tom6')
            .WithKeyBinding('H')
            .Build(),

        tom7: ZoneBuilder
            .Create('#tom7-touch')
            .WithDisplayName('Tom-Tom 7')
            .WithSoundFile('tom7')
            .WithKeyBinding('J')
            .Build(),

        tom8: ZoneBuilder
            .Create('#tom8-touch')
            .WithDisplayName('Tom-Tom 8')
            .WithSoundFile('tom8')
            .WithKeyBinding('K')
            .Build(),

        // =======================================================
        //  SNARE DRUMS
        // =======================================================

        snare1L: ZoneBuilder
            .Create('#snare1L-touch')
            .WithDisplayName('Snare (Left)')
            .WithSoundFile('snare1')
            .WithKeyBinding('C')
            .Build(),

        snare1R: ZoneBuilder
            .Create('#snare1R-touch')
            .WithDisplayName('Snare (Right)')
            .WithSoundFile('snare1')
            .WithKeyBinding('V')
            .Build(),
        
        // =======================================================
        //  BASS DRUM
        // =======================================================
        
        kik1: ZoneBuilder
            .Create('#kik1-touch')
            .WithDisplayName('Kick (Zone 1)')
            .WithAnimation('#pedalkik1', 'hitPedal')
            .WithAnimation('#beaterkik1', 'hitBeater')
            .WithSoundFile('kik2')
            .WithKeyBinding('B')
            .Build(),

        kik2: ZoneBuilder
            .Create('#kik2-touch')
            .WithDisplayName('Kick (Zone 2)')
            .WithAnimation('#pedalkik1', 'hitPedal')
            .WithAnimation('#beaterkik1', 'hitBeater')
            .WithSoundFile('kik2')
            .WithKeyBinding('B')
            .Build(),

        kik3: ZoneBuilder
            .Create('#kik3-touch')
            .WithDisplayName('Kick (Zone 3)')
            .WithAnimation('#pedalkik1', 'hitPedal')
            .WithAnimation('#beaterkik1', 'hitBeater')
            .WithSoundFile('kik2')
            .WithKeyBinding('B')
            .Build(),
    };
}