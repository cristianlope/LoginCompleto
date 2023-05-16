import { Link , Router, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";



export function Home(props){
    const navigate = useNavigate();
    function salir() {
        
        navigate("/");
        return auth.signOut();
        
    }



    return(<div className="nav">
                <div>
                    <div>
                        
           
                    <nav>
                        
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
			        <li><a href="#">Ferreteria</a></li>
			        <li><a href="#">Contacto</a></li>
            <br />
            <h2>{props.name?`Bienvenido - ${props.name}`:"Iniciar sesión"}</h2>
            <br />

            <button onClick={salir}>Salir</button>
		
	</nav>
                    </div>
                </div>
                 
                 
            </div>
  );
};




