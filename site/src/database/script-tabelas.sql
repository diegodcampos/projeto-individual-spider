create database projetoSpider;
use projetoSpider;

create table Usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(100),
senhaUsuario varchar(15),
heroiFavorito int );

create table CadastroCrimes (
idCrime int primary key auto_increment,
tituloCrime varchar(150),
dataCrime date,
spiderBot int,
statusCrime int,
fkUsuario int,
foreign key (fkUsuario)
references Usuario(idUsuario));

create table ResolucaoCrimes (
idResolvCrimes int primary key auto_increment,
comoResolver varchar(200),
spiderAjuda int,
fkCrime int,
foreign key (fkCrime)
references CadastroCrimes(idCrime));

select * from Usuario;
select * from CadastroCrimes;
select * from ResolucaoCrimes;