create database projetoSpider;
use projetoSpider;
drop tables Usuario, CadastroCrimes, ResolucaoCrimes;

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

select 
count(idCrime) as qtdCrimes,
sum(statusCrime = 0) as crimesAbertos,
sum(statusCrime = 1) as crimesFechados
from CadastroCrimes 
where fkUsuario = 1;

select 
sum(spiderBot = 1) + sum(spiderAjuda = 1) as totalAjudas,
sum(spiderBot = 1) as ajudaBot,
sum(spiderAjuda = 1) as ajudaSpider
from CadastroCrimes
join ResolucaoCrimes ON idCrime = fkCrime
where fkUsuario = 1;

select idCrime as id, tituloCrime as listaCrimes from CadastroCrimes
where fkUsuario = 1;

update CadastroCrimes set statusCrime = 1
where fkUsuario = 1;

update CadastroCrimes
    set tituloCrime = null;