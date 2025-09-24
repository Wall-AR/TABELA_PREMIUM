// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps', unit: 27.24, tag: '' },
        { desc: 'Biotina em gotas 30ml - Tutti Frutti', unit: 15.64, tag: 'novo' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 54.89, tag: '' },
        { desc: 'Reforce Hair 60caps', unit: 19.43, tag: '' },
        { desc: '3 Magnésios 30 Caps', unit: 11.87, tag: '' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 16.47, tag: '' },
        { desc: 'Carbonato de Cálcio 60 Caps', unit: 12.28, tag: 'Novo' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 25.38, tag: '' },
        { desc: 'Creatina Xtra 300G', unit: 35.28, tag: 'novo' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 52.00, tag: '' },
        { desc: 'Curcumina com colágeno tipo 2 30ml-Gotas', unit: 14.27, tag: 'gotas' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 14.27, tag: '' },
        { desc: 'Colágeno Tipo 2 60cap', unit: 13.20, tag: 'novo' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 17.90, tag: '' },
        { desc: 'CO-MAG 60caps', unit: 22.51, tag: 'novo' },
        { desc: 'D3 + K2 30caps - 2000UI / 159mcg', unit: 10.31, tag: '' },
        { desc: 'Ferrofor + C 60caps', unit: 11.32, tag: '' },
        { desc: 'Feno Grego 60caps', unit: 11.96, tag: '' },
        { desc: 'Morofor 120caps', unit: 17.47, tag: 'novo' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 19.00, tag: '' },
        { desc: 'Magnésio Dimalato 60caps', unit: 14.04, tag: '' },
        { desc: 'Magnésio Inositol 210g - Maracujá', unit: 38.12, tag: 'Novo' },
        { desc: 'Magnésio L-Treonato 60caps', unit: 13.83, tag: '' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 17.13, tag: '' },
        { desc: 'Magnésio Quelato 60caps', unit: 12.84, tag: '' },
        { desc: 'Memo Ative 30caps', unit: 11.90, tag: '' },
        { desc: 'Melatokalm Gotas Maracujá 30ml (Melatonina)', unit: 13.94, tag: 'gotas' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 12.51, tag: '' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 18.63, tag: '' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60cap', unit: 22.35, tag: 'novo' },
        { desc: 'Ômega 3 60caps 1gr Softgel', unit: 21.63, tag: 'novo' },
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 19.87, tag: '' },
        { desc: 'PEA-600 60caps', unit: 21.03, tag: 'novo' },
        { desc: 'PEA + Colágeno Tipo 2 60caps', unit: 22.57, tag: 'novo' },
        { desc: 'Picolinato de Cromo 30caps', unit: 10.75, tag: '' },
        { desc: 'PlenaMente 30caps', unit: 15.36, tag: 'novo' },
        { desc: 'Própolis Verde 60caps', unit: 16.47, tag: 'novo' },
        { desc: 'Reartron 60caps', unit: 26.01, tag: '' },
        { desc: 'Vitamina B12 30caps', unit: 10.42, tag: '' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 14.27, tag: 'gotas' },
        { desc: 'Vitamina K2 30caps', unit: 10.97, tag: '' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 10.20, tag: '' },
        { desc: 'SuperVita C 60caps', unit: 10.85, tag: 'novo' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 10.60, tag: '' },
        { desc: 'Ashwagandha 60caps', unit: 14.72, tag: 'novo' },
        { desc: 'Amora Miúra 60caps', unit: 11.41, tag: '' },
        { desc: 'Amora com Isoflavona 60caps', unit: 11.52, tag: '' },
        { desc: 'Calmim 60cap', unit: 12.76, tag: '' },
        { desc: 'Canela de Velho + Sucupira 60caps', unit: 11.64, tag: '' },
        { desc: 'Carvão Vegetal 60caps', unit: 11.08, tag: '' },
        { desc: 'Castanha da Índia 60cap', unit: 12.62, tag: '' },
        { desc: 'Cloreto de Magnésio PA 60caps', unit: 10.97, tag: '' },
        { desc: 'Cloreto de Magnésio PA + Sucupira 60cap', unit: 12.16, tag: '' },
        { desc: 'Colágeno Hidrolisado 60caps', unit: 12.21, tag: '' },
        { desc: 'Colágeno Tipo 2 60caps', unit: 15.86, tag: 'ultimo-lote' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60caps', unit: 11.08, tag: '' },
        { desc: 'Espinheira Santa 60caps', unit: 11.52, tag: '' },
        { desc: 'Ginkgo Biloba 60cap', unit: 12.29, tag: '' },
        { desc: 'Ginkgo + Castanha 60caps', unit: 12.73, tag: '' },
        { desc: 'L-Treonato Magnésio 60caps', unit: 13.83, tag: '' },
        { desc: 'Maca Peruana Negra 60caps', unit: 14.60, tag: '' },
        { desc: 'Mais Ativa 60caps', unit: 10.97, tag: '' },
        { desc: 'Óleo de Copaíba 1000mg 60cap', unit: 16.47, tag: 'novo' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60caps', unit: 22.35, tag: 'ultimo-lote' },
        { desc: 'Óleo de Sucupira 1000mg 60cap', unit: 15.37, tag: 'novo' },
        { desc: 'Ora Pro Nóbis 60caps', unit: 12.07, tag: '' },
        { desc: 'Seca Barriga com Laranja MORO 60caps', unit: 12.40, tag: '' },
        { desc: 'Tibulus Terrestris 40% 60caps', unit: 12.07, tag: '' },
        { desc: 'Tribulus + Maca Peruana 60caps', unit: 11.74, tag: '' },
        { desc: 'Uxi Amarelo + Unha de Gato 60caps', unit: 11.63, tag: '' },
        { desc: 'Valeriana 60caps', unit: 15.37, tag: '' },
        { desc: 'Concentrado de Inhame - 250ml', unit: 7.23, tag: 'chá' },
        { desc: 'Ora Pro Nóbis Chá Pronto - 250ml', unit: 7.32, tag: 'chá' }
      ]
    }
  ];

    const container = document.getElementById('tabela-container');

  tableData.forEach(brandData => {
    const tbl = document.createElement('table');
    tbl.className = 'table-brand';

    const colgroup = document.createElement('colgroup');
    ['60%', '20%', '20%'].forEach(w => {
      const col = document.createElement('col');
      col.style.width = w;
      colgroup.appendChild(col);
    });
    tbl.appendChild(colgroup);

    const bannerRow = document.createElement('tr');
    const bannerCell = document.createElement('th');
    bannerCell.colSpan = 3;
    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'brand-banner';
    bannerDiv.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(brandData.colorVar);
    const img = document.createElement('img');
    img.src = brandData.logo;
    img.alt = brandData.brand;
    bannerDiv.appendChild(img);
    bannerDiv.append(brandData.brand);
    bannerCell.appendChild(bannerDiv);
    bannerRow.appendChild(bannerCell);

    const thead = document.createElement('thead');
    thead.appendChild(bannerRow);
    const hdr = document.createElement('tr');
    hdr.innerHTML = `<th>Descrição do Produto</th><th>Unidade</th><th>Caixa (12 unidades)</th>`;
    thead.appendChild(hdr);
    tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    brandData.items.forEach(item => {
      const tr = document.createElement('tr');
      const tdDesc = document.createElement('td');
      tdDesc.textContent = item.desc;
      if (item.tag) {
        const span = document.createElement('span');
        span.className = `tag ${item.tag}`;
        span.textContent = item.tag.toUpperCase();
        tdDesc.appendChild(span);
      }
      tr.appendChild(tdDesc);

      const tdUnit = document.createElement('td');
      tdUnit.textContent = `R$ ${item.unit.toFixed(2)}`;
      tr.appendChild(tdUnit);

      const tdBox = document.createElement('td');
      tdBox.textContent = `R$ ${(item.unit * 12).toFixed(2)}`;
      tr.appendChild(tdBox);

      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    container.appendChild(tbl);
  });

 // Por este:
document.getElementById('btn-export').addEventListener('click', () => {
  window.print();
});

  document.getElementById('btn-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('btn-theme');
    btn.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro';
  });
});





