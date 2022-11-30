(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProducService;
        private mailer: Mailer;

        constructor(productService: ProducService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;

        }
    
        loadProduct( id: number ) {
           this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
           this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['jairleo95@gmail.com'], 'to-clients');
        }
    
    }

    class ProducService {

        //private httpAdapter: Object;

        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct(product: Product){
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        public masterEmail: string = 'jairleo95@gmail.com';

        sendEmail(emailList: string[], template: 'to-clients'|'to-admin'){
            console.log('Enviando correo a los clientes', template);
        }
    }
    
    class CartBloc{
        private itemsInCart: Object[] = [];
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }


    const productService = new ProducService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const catBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();

    catBloc.onAddToCart(10);





})();