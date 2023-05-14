import { Link , useNavigate } from "react-router-dom";
import { auth } from "../../firebase";




function salir() {
    const navigate = useNavigate();
    navigate("/");
    return auth.signOut();
    
    
}

export function Home(props){
    return(<div>
                <div>
                    <div>
                
                        <h1><Link to="/login">Login</Link></h1>
            
                         <br />
            
                        <h1><Link to="/signup">Registrar</Link></h1>

                        <br />

                        <h1><Link to="/onAddProduct">Carrito</Link></h1>
                        

           
                        
                    </div>
                </div>
                 <h2>{props.name?`Bienvenido - ${props.name}`:"Iniciar sesión"}</h2>
                 <button onClick={salir}>Salir</button>
            </div>
  );
};




