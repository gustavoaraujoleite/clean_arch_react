httpPostClient = Http do cliente para rotas Post que possui o metodo Post. O metodo Post recebe uma URL string e retorna uma Promessa!

httpPostClientSpy = Implementa o httpPostClient e tem a URL(opcional) como parametro. Deve implementar o Post obrigatorio do httpPostClient passando a URL e retornando uma Promise. Dentro dela identificamos a URL como this.URL, e retornamos o resolve da Promise


RemoteAuthentication = possui como parametros a URL e o HttpPostClient. Possui um mmetodo async AUTH do tipo Promise<void> e seu body tem um await do httpClient.post(url). O httpClient e url vem com o this por serem os dois parametros no construtor do RemoteAuthentication




JEST

toEqual = Compara os valores dos objetos

jest --clearCache = Limpar o cache do jest


CAMADAS:
Data - Aonde os dados são criados e persistidos. Essa camada é basicamente responsavel pelo CRUD

Domain - Parte central e mais interior da camada. Nao contem dependencias com outras camadas. Contem Entidades, Casos de Uso e Interfaces de Repositorios

Interfaces de Repositorio - Como o Domain nao pode ter nenhuma dependencia, os casos de uso requerem um meio para acessar dados. A camada de domain defini as interfaces para os repositorios