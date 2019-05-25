import React from 'react';
import {Link} from 'react-router-dom';

export default function AppNavigation() {
        return(
            <div>
                <Link to="/"><button>Firebase Login Page</button></Link>
                <Link to="/JabberMainPage"><button>Jabber Main Page</button></Link>
                <Link to="/ProfilePage"><button>Edit Jabs</button></Link>
            </div>
        )
}